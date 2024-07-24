import sys
import glob
import serial
import serial.tools.list_ports
from pprint import pprint


import uuid


def getserialport():
    ports = serial.tools.list_ports.comports()

    if len(ports) < 1:
        print("No serial port connected")
        exit(1)
        
    return ports[0]

if __name__ == '__main__':
    # print(serial_ports())

    port = getserialport()
    s = serial.Serial(port.device, 115200)

    uid = uuid.uuid4()


    print("Waiting for card")


    s.close()