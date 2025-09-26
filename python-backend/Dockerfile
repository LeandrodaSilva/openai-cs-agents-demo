# Python backend Dockerfile
FROM python:3.11-slim
WORKDIR /python-backend
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 7775
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "7775"]

