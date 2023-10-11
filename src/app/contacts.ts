import { Contact } from './contact';

export class Contacts {
  private contacts: Contact[] = [];

  addContact(name: string, email: string, phone: string): void {
    const newId = this.contacts.length + 1;
    const newContact = new Contact(newId, name, email, phone);
    this.contacts.push(newContact);
  }

  removeContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }
}
