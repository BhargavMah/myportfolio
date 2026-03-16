from django.core.mail import send_mail
from django.shortcuts import render
from .forms import ContactForm
import logging
import socket

def index(request):
    return render(request, 'index.html') 
def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            full_message = f"From: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message}"
            
            try:
                send_mail(
                    subject,
                    full_message,
                    email,
                    ['bhargavmahajan01@gmail.com'],
                    fail_silently=False,
                )
                return render(request, 'index.html', {'form': ContactForm(), 'success': True})
            except (socket.error, socket.timeout) as e:
                # Log the error
                logging.error(f"Email sending failed: {str(e)}")
                # Return the form with an error message
                return render(request, 'index.html', {
                    'form': form, 
                    'error': "Sorry, we couldn't send your message. Please try again later."
                })
    else:
        form = ContactForm()
    
    return render(request, 'index.html', {'form': form})