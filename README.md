# REST API using Node, Express & MongoDb

## CURL Requests

### # Get all recipes

```curl
curl --location 'http://localhost:3000/recipes' \
--data ''
```

### # Create Recipe

```curl
curl --location 'http://localhost:3000/recipes' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Sandwich",
    "category": "Breakfast",
    "items": ["bread", "tomatoes", "cucumber", "onion"]
}'
```

### # Get One Recipe

```curl
curl --location 'http://localhost:3000/recipes?name=Omlette' \
--data ''
```

### # Update Recipe

```curl
curl --location --request PATCH 'http://localhost:3000/recipes/?id=65bfbf75871de38e28cdeab5' \
--header 'Content-Type: application/json' \
--data '{
    "category": "Lunch"
}'
```

### # Delete Recipe

```curl
curl --location --request DELETE 'http://localhost:3000/recipes/?id=65bfbce2ceb8c35632547052' \
--data ''
```

---

### YouTube Video:

[![](https://img.youtube.com/vi/0RmktpIrKJY/0.jpg)](https://www.youtube.com/watch?v=0RmktpIrKJY)
