#!/bin/bash
npm install
npm run build:css
python manage.py collectstatic --noinput