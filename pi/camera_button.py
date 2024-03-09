import RPi.GPIO as GPIO
import time
import os
import threading
from datetime import datetime
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Environment variables
SERVER_ADDRESS = "http://avalens.onrender.com"
PUBLIC_KEY = os.getenv('PUBLIC_KEY')
print(SERVER_ADDRESS)
print(PUBLIC_KEY)

def upload_image(imagePath, PUBLIC_KEY):
    try:
        with open(imagePath, 'rb') as image_file:
            files = {
                'image': image_file
            }
            data = {
                'public_key': PUBLIC_KEY
            }
            response = requests.post(f'{SERVER_ADDRESS}/pi/upload', files=files, data=data)
            if response.ok:
                print("Image successfully uploaded")
            else:
                print(f"Failed to upload image: {response.text}")
    except Exception as e:
        print(f"An error occurred during upload: {e}")

def take_photo(channel):
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    imageNum = 1
    imagePath = f"/home/summer-rise/Pictures/photo{imageNum}_{timestamp}.jpg"
    os.system(f"libcamera-still -t 100 -o {imagePath}")
    print(f"Photo taken at {timestamp}")
    imageNum += 1

    # Start the upload in a separate thread
    threading.Thread(target=upload_image, args=(imagePath, PUBLIC_KEY)).start()

GPIO.setmode(GPIO.BCM)
GPIO.setup(14, GPIO.IN, pull_up_down=GPIO.PUD_UP)

GPIO.add_event_detect(14, GPIO.FALLING, callback=take_photo, bouncetime=300)

try:
    print("Ready to take photos. Press the button...")
    data = {'public_key': PUBLIC_KEY}
    response = requests.post(f'{SERVER_ADDRESS}/init-camera', json=data)
    
    while True:
        time.sleep(0.1)
except KeyboardInterrupt:
    print("Program exited cleanly")
finally:
    GPIO.cleanup()