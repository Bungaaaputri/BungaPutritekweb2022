## API Points

API Point yang saya gunakan untuk membuat side server pada portfolio saya di antaranya users, skills, dan article

### Users

#### Menampilkan semua pengguna

```
GET: /users

respones:
[
    {
        "id"              : "",
        "avatar"          : "",
        "nama"            : "",
        "nama_lengkap"    : "",
        "desc"            : "",
        "desc_side"       : "",
        "foto_about"      : "",
        "desc_about"      : ""
    }
    ...
]
```

#### Menampilkan user berdasarkan `id` tertentu

```
GET: /users/[id]

response:
{
    "id"              : "",
    "avatar"          : "",
    "nama"            : "",
    "nama_lengkap"    : "",
    "desc"            : "",
    "desc_side"       : "",
    "foto_about"      : "",
    "desc_about"      : ""
}
```

#### Menambahkan data user pada server menggunakan `POST`

```
POST: /users

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"              : "",
    "avatar"          : "",
    "nama"            : "",
    "nama_lengkap"    : "",
    "desc"            : "",
    "desc_side"       : "",
    "foto_about"      : "",
    "desc_about"      : ""
}

response:
true    // if success
false   // if failure
```

#### Mengubah data pada user menggunakan `PUT`

```
PUT: /users

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"              : "",
    "avatar"          : "",
    "nama"            : "",
    "nama_lengkap"    : "",
    "desc"            : "",
    "desc_side"       : "",
    "foto_about"      : "",
    "desc_about"      : ""
}

response:
true    // if success
false   // if failure
```

#### Menghapus data useer menggunakan method `DELETE`

```
DELETE: /users/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure
```
