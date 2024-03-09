import RPi.GPIO as GPIO
import time
import os

def take_photo(channel):
    global image_num
    strImage = str(image_num)
    os.system("libcamera-still -t 100 -o /home/summer-rise/Pictures" + strImage + ".jpg")
    print(f"Photo {strImage} taken")
    image_num += 1

GPIO.setmode(GPIO.BCM)
GPIO.setup(14, GPIO.IN, pull_up_down=GPIO.PUD_UP)

image_num = 1

# Add event detection for button press
GPIO.add_event_detect(14, GPIO.FALLING, callback=take_photo, bouncetime=300)

try:
    # Loop to keep the script running
    while True:
        time.sleep(0.1)  # Reduce CPU usage with a longer sleep

except KeyboardInterrupt:
    print("Program exited cleanly")

finally:
    GPIO.cleanup()  # Clean up GPIO on normal exit