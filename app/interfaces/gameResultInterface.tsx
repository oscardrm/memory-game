export interface GameResultInterface{
    message: string;
    colorMessage: string;
    isError: boolean;
    isSuccess: boolean;
    errorPoints: number;
    successPoints: number;
    maxNumberOfCards: number,
    minNumberOfCards: number,
    seconds: number
}