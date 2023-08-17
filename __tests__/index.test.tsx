import { getCards } from '@/app/utilities/globalFunctions';
import { globalVariables } from '@/app/utilities/globalVariables';
import { ApiImagesInterface } from '@/app/interfaces/images/apiImageInterface';

describe('User name', () => {
  it('save and get user name', () => {
    const userName = "testing_user";
    setCurrentUserName(userName);
    const result = getCurrentUserName();
    expect(result).toBe(userName);
  })

  it('clear user name', () => {
    clearCurrentUserName();
    const userName = getCurrentUserName();
    expect(userName).toBeNull();
  })
})

describe('Cards image', () => {
  it('Get specific number of cards', async() => {
    const result = await getCards(imageTests,3)
      expect(result.length).toBe(3);
  });

  it('Get specific number of cards no supported', async() => {
    const result = await getCards(imageTests,20)
      expect(result.length).toBe(0);
  })
})

const imageTests : ApiImagesInterface = {
    "entries": [
        {
            "meta": {
                "name": "bear",
                "slug": "bear",
                "tags": [],
                "type": "game",
                "uuid": "a4452fe5-ca10-4b35-ad7a-62fc44c60d27",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:43:03.000-03:00",
                "updated_at": "2023-06-30T08:42:48.000-04:00",
                "published_at": "2023-06-30T08:42:48.000-04:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/f0753a4f-87b2-484d-aeb1-a22c3278cb50/original/bear.jpg",
                    "tags": [],
                    "uuid": "f0753a4f-87b2-484d-aeb1-a22c3278cb50",
                    "title": "Bear",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "bird",
                "slug": "bird",
                "tags": [],
                "type": "game",
                "uuid": "e5a7f1c5-c8dd-43f5-a87b-12bf01b684ba",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:43:42.000-03:00",
                "updated_at": "2023-03-24T14:51:50.000-03:00",
                "published_at": "2023-03-24T14:51:50.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg",
                    "tags": [],
                    "uuid": "651e2381-dc33-43fc-8762-58079ffb36d1",
                    "title": "Bird",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "cat",
                "slug": "cat",
                "tags": [],
                "type": "game",
                "uuid": "0d39b30f-1a65-493b-b11a-a2568b98e430",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:52:01.000-03:00",
                "updated_at": "2023-06-30T08:44:44.000-04:00",
                "published_at": "2023-06-30T08:44:44.000-04:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/bf9df521-88bb-44f5-8853-d7f9a5f4aa60/original/cat.jpg",
                    "tags": [],
                    "uuid": "bf9df521-88bb-44f5-8853-d7f9a5f4aa60",
                    "title": "Cat",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "deer",
                "slug": "deer",
                "tags": [],
                "type": "game",
                "uuid": "084bde01-aad5-47c9-a2e3-8940ef4fefbf",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:52:48.000-03:00",
                "updated_at": "2023-03-24T14:53:05.000-03:00",
                "published_at": "2023-03-24T14:53:05.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/1072dca9-1c9b-4a76-abfb-1d70d7dd861b/original/deer.jpg",
                    "tags": [],
                    "uuid": "1072dca9-1c9b-4a76-abfb-1d70d7dd861b",
                    "title": "Deer",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "dog",
                "slug": "dog",
                "tags": [],
                "type": "game",
                "uuid": "f7ecbaf1-b6e2-4f64-996e-b55d75d9da6f",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:53:17.000-03:00",
                "updated_at": "2023-06-30T08:47:08.000-04:00",
                "published_at": "2023-06-30T08:47:08.000-04:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg",
                    "tags": [],
                    "uuid": "c10dc024-71f4-4a60-a3b7-2c53ffe2522d",
                    "title": "Dog",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "dolphin",
                "slug": "dolphin",
                "tags": [],
                "type": "game",
                "uuid": "882fb728-e9ba-435e-af53-0959887ee3cb",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:53:51.000-03:00",
                "updated_at": "2023-03-24T14:54:16.000-03:00",
                "published_at": "2023-03-24T14:54:16.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/db3322be-03ac-41af-be11-7944fcef7fa0/original/dolphin.jpg",
                    "tags": [],
                    "uuid": "db3322be-03ac-41af-be11-7944fcef7fa0",
                    "title": "Dolphin",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "fish",
                "slug": "fish",
                "tags": [],
                "type": "game",
                "uuid": "493f73c0-645e-4016-82c2-5412d7b01e5e",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:54:28.000-03:00",
                "updated_at": "2023-03-24T14:54:45.000-03:00",
                "published_at": "2023-03-24T14:54:45.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/6bab500a-c518-4cee-818b-2d3e3e79c036/original/fish.jpg",
                    "tags": [],
                    "uuid": "6bab500a-c518-4cee-818b-2d3e3e79c036",
                    "title": "Fish",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "fox",
                "slug": "fox",
                "tags": [],
                "type": "game",
                "uuid": "770e0227-b9f8-4d25-9d1d-a92c1ceb6fff",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:55:11.000-03:00",
                "updated_at": "2023-03-24T14:55:27.000-03:00",
                "published_at": "2023-03-24T14:55:27.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/0ce37857-9fe4-412c-ad4f-2c70737226d6/original/fox.jpg",
                    "tags": [],
                    "uuid": "0ce37857-9fe4-412c-ad4f-2c70737226d6",
                    "title": "Fox",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "frog",
                "slug": "frog",
                "tags": [],
                "type": "game",
                "uuid": "746ca74f-da71-4222-924d-b7048847cc40",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:55:45.000-03:00",
                "updated_at": "2023-03-24T14:56:01.000-03:00",
                "published_at": "2023-03-24T14:56:01.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/a5268065-1c30-4585-bf78-8e2bde7d84fb/original/frog.jpg",
                    "tags": [],
                    "uuid": "a5268065-1c30-4585-bf78-8e2bde7d84fb",
                    "title": "Frog",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "lion",
                "slug": "lion",
                "tags": [],
                "type": "game",
                "uuid": "d7aa6523-4574-4783-9491-7a07a8e5af2c",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:56:12.000-03:00",
                "updated_at": "2023-03-24T14:56:31.000-03:00",
                "published_at": "2023-03-24T14:56:31.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/8144e12d-4337-4630-80fd-278c399e48ed/original/lion.jpg",
                    "tags": [],
                    "uuid": "8144e12d-4337-4630-80fd-278c399e48ed",
                    "title": "Lion",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "monkey",
                "slug": "monkey",
                "tags": [],
                "type": "game",
                "uuid": "5f50ff3e-1b9d-4ac3-8d41-c526f90adcaa",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:57:03.000-03:00",
                "updated_at": "2023-03-24T14:57:23.000-03:00",
                "published_at": "2023-03-24T14:57:23.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/9d7e2d47-d958-4931-ab2e-c568631f493e/original/monkey.jpg",
                    "tags": [],
                    "uuid": "9d7e2d47-d958-4931-ab2e-c568631f493e",
                    "title": "Monkey",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "mouse",
                "slug": "mouse",
                "tags": [],
                "type": "game",
                "uuid": "051b5fab-a7aa-4a92-b1f6-efeb0a6237be",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:57:38.000-03:00",
                "updated_at": "2023-03-24T14:58:12.000-03:00",
                "published_at": "2023-03-24T14:58:12.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/8b7b95f2-c18a-4cec-a6e9-c6278d3dea42/original/mouse.jpg",
                    "tags": [],
                    "uuid": "8b7b95f2-c18a-4cec-a6e9-c6278d3dea42",
                    "title": "Mouse",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "penguin",
                "slug": "penguin",
                "tags": [],
                "type": "game",
                "uuid": "38e2d1a0-8320-498b-bc7e-51c71fd57690",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:58:26.000-03:00",
                "updated_at": "2023-03-24T14:58:46.000-03:00",
                "published_at": "2023-03-24T14:58:46.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/09f772c7-1176-4fc7-917c-8c1ba75fc9b1/original/penguin.jpg",
                    "tags": [],
                    "uuid": "09f772c7-1176-4fc7-917c-8c1ba75fc9b1",
                    "title": "Penguin",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "rabbit",
                "slug": "rabbit",
                "tags": [],
                "type": "game",
                "uuid": "c559535f-9d7f-43d0-89c7-78612cfeb204",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:59:00.000-03:00",
                "updated_at": "2023-06-30T08:48:21.000-04:00",
                "published_at": "2023-06-30T08:48:21.000-04:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/9d2c907d-aaa1-4cf6-a526-e3ed50586fca/original/rabbit.jpg",
                    "tags": [],
                    "uuid": "9d2c907d-aaa1-4cf6-a526-e3ed50586fca",
                    "title": "Rabbit",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "seal",
                "slug": "seal",
                "tags": [],
                "type": "game",
                "uuid": "fbaffd5f-c07a-4f43-849f-43bd7a354aeb",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T14:59:50.000-03:00",
                "updated_at": "2023-03-24T15:00:07.000-03:00",
                "published_at": "2023-03-24T15:00:07.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/6a538ecc-e573-4bea-9c3c-2a8dcbd04724/original/seal.jpg",
                    "tags": [],
                    "uuid": "6a538ecc-e573-4bea-9c3c-2a8dcbd04724",
                    "title": "Seal",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "squirrel",
                "slug": "squirrel",
                "tags": [],
                "type": "game",
                "uuid": "d7a86b0c-2131-45c1-b265-e90bcd95fb6f",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T15:00:22.000-03:00",
                "updated_at": "2023-03-24T15:00:40.000-03:00",
                "published_at": "2023-03-24T15:00:40.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/91f3cfcc-e3ea-468a-8f73-1bdc59f556b8/original/squirrel.jpg",
                    "tags": [],
                    "uuid": "91f3cfcc-e3ea-468a-8f73-1bdc59f556b8",
                    "title": "Squirrel",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "tiger",
                "slug": "tiger",
                "tags": [],
                "type": "game",
                "uuid": "4f64ece6-3bae-4032-bd66-c7250544087d",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T15:00:56.000-03:00",
                "updated_at": "2023-06-30T08:49:40.000-04:00",
                "published_at": "2023-06-30T08:49:40.000-04:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/d2023181-18c8-4b74-898d-317d6d0f46cc/original/tiger.jpg",
                    "tags": [],
                    "uuid": "d2023181-18c8-4b74-898d-317d6d0f46cc",
                    "title": "Tiger",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "turtle",
                "slug": "turtle",
                "tags": [],
                "type": "game",
                "uuid": "61538a7b-2cf0-4d3a-a475-ecc14c9d8b8a",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T15:01:31.000-03:00",
                "updated_at": "2023-06-30T08:51:11.000-04:00",
                "published_at": "2023-06-30T08:51:11.000-04:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/f1bc448a-440d-43c2-9fc3-ee266a011678/original/turtle.jpg",
                    "tags": [],
                    "uuid": "f1bc448a-440d-43c2-9fc3-ee266a011678",
                    "title": "Turtle",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "wild-pig",
                "slug": "wild-pig",
                "tags": [],
                "type": "game",
                "uuid": "8cd71a50-26d6-463b-bf07-7fd3445b1c00",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T15:02:02.000-03:00",
                "updated_at": "2023-03-24T15:02:38.000-03:00",
                "published_at": "2023-03-24T15:02:38.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/7fceff35-5957-4b9a-9d5d-70c807084f40/original/wild-pig.jpg",
                    "tags": [],
                    "uuid": "7fceff35-5957-4b9a-9d5d-70c807084f40",
                    "title": "Wild Pig",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        },
        {
            "meta": {
                "name": "zebra",
                "slug": "zebra",
                "tags": [],
                "type": "game",
                "uuid": "a7a6c579-ee0d-4845-a9ed-0e39b3c715be",
                "space": "animals",
                "author": {},
                "locale": "es",
                "excerpt": "",
                "private": false,
                "targets": [],
                "category": null,
                "created_at": "2023-03-24T15:02:52.000-03:00",
                "updated_at": "2023-03-24T15:03:08.000-03:00",
                "published_at": "2023-03-24T15:03:08.000-03:00",
                "unpublish_at": null,
                "version_type": "current",
                "category_name": null,
                "category_slug": null,
                "available_locales": [
                    "es"
                ]
            },
            "fields": {
                "image": {
                    "url": "https://cloud.modyocdn.com/uploads/ff3e53da-5964-45e0-b50a-cb65e6cf9a99/original/zebra.jpg",
                    "tags": [],
                    "uuid": "ff3e53da-5964-45e0-b50a-cb65e6cf9a99",
                    "title": "Zebra",
                    "alt_text": null,
                    "description": null,
                    "content_type": "image/jpeg"
                }
            }
        }
    ]
}

const getCurrentUserName = () => {
    return localStorage.getItem(globalVariables.LOCAL_USERNAME) ?? null;
}

const setCurrentUserName = (username: string) => {
    localStorage.setItem(globalVariables.LOCAL_USERNAME, username);
}

const clearCurrentUserName = () => {
    localStorage.removeItem(globalVariables.LOCAL_USERNAME);
}



