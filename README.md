# Untangled-FE

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get User |`/users/:id`| GET | | <pre>{<br> "data": {<br>   "user": {<br>     "id": `<int>`,<br>     "name": `<string>`,<br>     "email": `<string>`,<br>    }<br>  }<br>}</pre>
| Get Rooms |`/users/:id/rooms`| GET || <pre>{<br>  "data": {<br>    "rooms": [ {<br>      "id": `<int>`, <br>      "name": `<str>`, <br>     },]<br>  }<br>} </pre>|
| Get Room |`/rooms/:id`| GET | | <pre>{<br>  "data": {<br>    id: `<int>`<br>    name: `<str>`<br>    image: `<str>`<br>  }<br>}    |
| Get Memories |`/rooms/:id/memories`| GET | | <pre> {<br>   "data": {<br>     "memories": [<br>       {<br>        id: `<int>`,<br>        description: `<string>`,<br>        image: `<string>`,<br>        song: `<string>`,<br>        aromas: `<str>`,<br>        location: `<string>`,<br>        },<br>        {<br>        id: `<int>`,<br>        description: `<string>`,<br>        image: `<string>`,<br>        song: `<string>`,<br>        aromas: `<str>`,<br>        location: `<string>`,<br>        },<br>        ]<br>    }<br>} </pre> |