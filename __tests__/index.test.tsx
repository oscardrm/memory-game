import { clearCurrentUserName, getCurrentUserName, setCurrentUserName,getCards } from '@/app/helpers/globalFunctions';
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
      }
    ]
  }







