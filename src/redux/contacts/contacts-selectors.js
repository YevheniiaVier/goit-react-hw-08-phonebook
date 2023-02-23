export const selectContacts = ({ contacts }) => {
  return contacts.items;
};
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return filteredContacts;
};
