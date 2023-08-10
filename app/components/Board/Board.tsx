'use client';
import { GameResultInterface } from "@/app/interfaces/gameResultInterface";
import { EntryInterface } from "@/app/interfaces/images/entryInterface";
import { ShowedImageInterface } from "@/app/interfaces/images/imagesShowedInterface";
import { Fragment, useEffect, useState } from "react";
import UserNameForm from "../UserName/UserNameForm";
import { getCurrentUserName } from "@/app/helpers/globalFunctions";
interface ApiImagesInterface {
    entries: EntryInterface[];
}




const Board = () => {
    let SHOW_CARD_FORMAT = 'vertical';
    // normally the value of these constants is stored in an environment file but for practical purposes I will leave it here
    const NUMBER_OF_IMAGES = 20;
    // number of unique images taked from the API
    const API_IMGES_URL = `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=${NUMBER_OF_IMAGES}`;
    const [images, setImages] = useState<ApiImagesInterface>({ entries: [] });
    const [showedImages, setShowedImages] = useState<ShowedImageInterface[]>([]);
    const [gameResult, setGameResult] = useState<GameResultInterface>(
        {
            message: '',
            errorPoints: 0,
            successPoints: 0,
            isSuccess: false,
            isError: false,
            colorMessage: ""
        });
    let randomId = 0;


    // when the context charge the first time, go to get the images from the API 
    useEffect(() => {
        getApiImages();
    }, [])

    /**
     * This method fetches the images from the API
     */
    const getApiImages = () => {
        fetch(API_IMGES_URL)
            .then(res => res.json())
            .then(data => {
                setImages(data)
                getImagesCards(data);
            })
            .catch(err => console.log(`Some error occured: ${err}`));
    }

    const getHorizontalImages = (imageData: ApiImagesInterface) => {
        return new Promise<ShowedImageInterface[]>((resolve) => {
            let resultCardImages: ShowedImageInterface[] = [];
            imageData.entries.forEach((item, index) => {
                checkIsVerticalImage(item?.fields?.image?.url)
                    .then(res => {
                        const objectResult: ShowedImageInterface = {
                            url: item?.fields?.image?.url,
                            uuid: item?.fields?.image?.uuid,
                            title: item?.fields?.image?.title,
                            matched: false,
                            flipped: false,
                            numberOnBoard: 0,
                            id: ""
                        };

                        if (!res && SHOW_CARD_FORMAT == 'horizontal') {
                            resultCardImages.push(objectResult);
                        }

                        if (res && SHOW_CARD_FORMAT === 'vertical') {
                            resultCardImages.push(objectResult);
                        }
                        // finish a return de value of primise when is the last iteration
                        if (index === imageData.entries.length - 1) {
                            resolve(resultCardImages);
                        }
                    })
            });
        })
    }
    const getUniqueId = () => {
        return randomId++;
    }

    const getImagesCards = (imageData: ApiImagesInterface) => {
        getHorizontalImages(imageData)
            .then(unicImages => {
                // cloning images and sortering randomly
                const cardsOrdered = [...unicImages, ...unicImages]
                    .sort(() => Math.random() - 0.5)
                    .map((card) => ({ ...card, id: `${getUniqueId()}${card.title.replace(/\s+/g, '')}` }));
                setShowedImages(cardsOrdered);
            })
    }

    const checkIsVerticalImage = (urlImage: string) => {
        return new Promise<boolean>((resolve) => {
            const imagen = new Image();
            imagen.src = urlImage;
            imagen.onload = () => {
                resolve(imagen.naturalHeight > imagen.naturalWidth)
            };
        });
    };

    const hideAllCards = () => {
        const newValues = showedImages.map((item) => ({ ...item, flipped: item.matched }));
        return newValues;
    }
    const onClickCard = (card: ShowedImageInterface) => {
        let newValues = showedImages;
        setGameResult({ ...gameResult, message: 'Congratulations! You have won the game. The game is over.', isSuccess: true });
        const flippedCards = showedImages.filter((item) => item.flipped && !item.matched).length;
        // if 2 cards have already been flipped then mark all as flipped: false when matched is false
        if (flippedCards === 2) {
            newValues = hideAllCards();
        }
        const existSameFlippedCard = newValues.some((item) => item.uuid === card.uuid && item.flipped);
        newValues = newValues.map((item) => {
            // If the same card has already been turned over then we mark it as matched so that they remain turned over
            if (existSameFlippedCard && item.uuid === card.uuid) {
                item.matched = true;
            }
            updateGamePoints(flippedCards, existSameFlippedCard);
            if (item.id === card.id) {
                item.flipped = true;
            }
            return item;
        });
        setShowedImages(newValues);
        if (checkGameFinished()) {
            updateGameRultMessage();
        }
    }

    const updateGameRultMessage = () => {
        let message = '';
        let color = '';
        if (gameResult.errorPoints > gameResult.successPoints) {
            message = 'Ups! You have lost the game. Try again.';
            color = 'bg-red-700';
        } else
            if (gameResult.errorPoints < gameResult.successPoints) {
                message = 'Congratulations! You have won the game. The game is over.';
                color = 'bg-green-600';
            } else {
                message = 'You were close! Try again.';
                color = 'bg-yellow-600'
            }
        setGameResult(
            {
                ...gameResult,
                message: message,
                isSuccess: true,
                colorMessage: color
            });
    }


    const updateGamePoints = (flippedCards: number, existSameFlippedCard: boolean) => {
        if (flippedCards == 1) {
            if (existSameFlippedCard) {
                setGameResult({ ...gameResult, successPoints: gameResult.successPoints + 1 });
            } else {
                setGameResult({ ...gameResult, errorPoints: gameResult.errorPoints + 1 });
            }
        }
    }


    const checkGameFinished = (): boolean => {
        const cardNoFlippled = showedImages.find((item) => !item.flipped);
        return cardNoFlippled ? false : true
    }


    return (
        <Fragment>
            {getCurrentUserName() ? (
                <>
                    <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-2xl">
                       Hello {getCurrentUserName()}, welcome to  MEMORY GAME
                    </span>
                    <h1>Aciertos: {gameResult.successPoints} -- Errores: {gameResult.errorPoints}</h1>
                    {checkGameFinished() && (
                        <div className={`flex items-center bg-${gameResult.colorMessage}-600 text-white text-sm font-bold px-4 py-3 mb-2 mt-1`} role="alert">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                            <p>{gameResult.message}</p>
                        </div>
                    )}
                    {
                        images.entries.length > 0 && (
                            <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 ">
                                {showedImages.map((item) => (
                                    <div className="box-border h-50 w-32 p-4 border-4 hover:cursor-pointer" key={item?.id}>
                                        <img src={(item.flipped || item.matched) ? item?.url : "./backCard.png"} alt={item.title} onClick={() => onClickCard(item)}></img>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </>
            ) : <UserNameForm />}
        </Fragment>
    );
}

export default Board;