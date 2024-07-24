import sys from "sys"
import glob from "glob"
import serial from "serial"
import list_ports from "serial/tools/list_ports"
import { pprint } from "pprint"
import uuid from "uuid"
function getserialport() {
    let ports = serial.tools.list_ports.comports()
    if (ports.length < 1) {
        console.log("No serial port connected")
        process.exit(1)
    }
    return ports[0]
}
if (__filename == '__main__') {
    let port = getserialport()
    let s = serial.Serial(port.device, 115200)
    let uid = uuid.uuid4()
    console.log("Waiting for card")
    s.close()
}