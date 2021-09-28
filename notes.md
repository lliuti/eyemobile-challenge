# Product

id: uuid
registered_by: uuid FK
image
name: string
price: number

---

# Transaction

id: uuid
product_id: uuid FK  
amount: number
observation: string

---

# Auth

email
password

---

# User

id: uuid
name: string
email: string
password: string
