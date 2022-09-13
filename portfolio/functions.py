import chunk
from fileinput import filename


def handle_uploaded_file(f):
    with open('myapp/static/upload/'+f.name, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
# def handle_data_submitted(u):
#     filename = input("filename: ")
#     with open(filename, "w") as u:
#         u.write(input())