# MeetorAI Test

This project was completed in 3h and 10 minutes as part of a technical test for MentorAI

## Description

- Backend (Django): Creates an API endpoint that allows you to create books. Each book must have the following fields: title, author, and year of publication. We will use Django REST Framework for the API.

- Frontend (ReactJS): On your React side, you just need to create a simple form to add books via the API you have just created. The form must have the three fields: title, author, and year of publication. When you submit the form, the book should be sent to the backend.

## Getting Started

### Installing

Clone the project on your computer.

In the backend folder:
```
python3 -m venv venv
source venv/bin/activate
python3 -m pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser --username admin --email admin@example.com
```

In the frontend folder:
```
npm install
cp .env.example .env
```

### Executing programs

With venv running in the backend folder:
```
python manage.py runserver
```

In the frontend folder:
```
npm run build
npm run preview
```

## Authors

[Axel Virot](axel.virot@gmail.com)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- [MentorAI](https://www.linkedin.com/company/www.mentorai.fr/)
