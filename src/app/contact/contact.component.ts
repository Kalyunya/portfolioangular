import { Component } from '@angular/core';
import { Contacts } from '../contacts';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private contacts = new Contacts();

  // Змінні для збереження введених даних
  name: string = '';
  email: string = '';
  phone: string = '';

  // Метод для додавання нового контакту
  addContact(): void {
    this.contacts.addContact(this.name, this.email, this.phone);
    // Очищаємо поля вводу
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  // Метод для видалення контакту
  removeContact(contact: Contact): void {
    this.contacts.removeContact(contact);
  }

  // Метод для отримання всіх контактів
  getAllContacts(): Contact[] {
    return this.contacts.getAllContacts();
  }
}
