import qrcode
from PIL import Image, ImageDraw, ImageFont

class Employee:
    def __init__(self, name, department, emergencycontact, employee_id):
        self.name = name
        self.department = department
        self.emergencycontact = emergencycontact
        self.employee_id = employee_id


employee1 = Employee(
    "ARIN",
    "IT",
    "6455342967",
    "ANP156"
)


qr_data = (
    "Name: " + employee1.name + "\n" +
    "Employee ID: " + employee1.employee_id + "\n" +
    "Department: " + employee1.department + "\n" +
    "Emergency Contact: " + employee1.emergencycontact
)


qr = qrcode.make(qr_data)

qr.save("employee_info.png")

badge = Image.new("RGB", (600, 800), "white")

draw = ImageDraw.Draw(badge)

qr_image = Image.open("employee_info.png")
qr_image = qr_image.resize(( 300, 300))

qr_x = int((badge.width - qr_image.width) / 2)

qr_y = 300 
badge.paste(qr_image, (qr_x, qr_y))

draw.rectangle((10, 10, 590, 790), outline="black", width=5)

draw.line((50, 285, 550, 285), fill="black", width=2)

badge.save("employee1_badge.png")

font = ImageFont.truetype("BASKVILL.TTF", 40)

text_box = draw.textbbox((0, 0), employee1.name, font=font)

text_width = text_box[2] - text_box[0]

x_coordinate = int((600 - text_width) / 2)

draw.text(
    (x_coordinate, 100),
    employee1.name,
    font=font,
    fill="black"
)
badge.save("employee1_badge.png")

id_box = draw.textbbox((0, 0), employee1.employee_id, font=font)
id_width = id_box[2] - id_box[0]
id_x_coordinate = int((600 - id_width) /2 )
draw.text((id_x_coordinate, 160), employee1.employee_id, font=font, fill="black")
badge.save("employee1_badge.png")

department_box = draw.textbbox((0, 0), employee1.department, font=font)
department_width = department_box[2] - department_box[0]
department_x_coordinate = int((600 - department_width) / 2)
draw.text((department_x_coordinate, 220), employee1.department, font=font, fill="black")
badge.save("employee1_badge.png")

title_font = ImageFont.truetype("C:/Windows/Fonts/BRITANIC.TTF", 50)
title_box = draw.textbbox((0, 0), "Employee Badge", font=title_font)
title_width = title_box[2] - title_box[0]

title_x = int((badge.width - title_width) / 2)
draw.text((title_x, 20), "EMPLOYEE BADGE", font=title_font, fill="black")
badge.save("employee1_badge.png")