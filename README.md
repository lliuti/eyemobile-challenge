# eyemobile-challenge

NodeJS + Typescript API from Eyemobile challenge

## HOW TO RUN

To run this API all you will need to install is Docker. You can download it here:
https://www.docker.com/

_(and docker-compose if you use linux/macos)_

<br>
First, clone this repository into a directory of your preference

```
git clone https://github.com/lliuti/eyemobile-challenge.git
```

<br>

Now, rename the file _".env.example"_ to only _".env"_ and fill the missing information. Instructions:

If you don't have mysql installed you can use the default configurations:

```
TYPEORM_USERNAME=root

TYPEORM_PASSWORD=admin

MYSQL_ROOT_PASSWORD=admin
```

And for _JWT_SECRET_ you can create a MD5 hash (by typing anything at the text field) at: https://www.md5hashgenerator.com/ and paste the hash there.

<br>

After that, on the root folder of the project, run:

```
docker compose up
```
