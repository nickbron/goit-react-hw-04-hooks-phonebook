import { Input } from '../ContactForm/ContactForm.styled';

function Filter({ filter, onChange }) {
  return (
    <>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={onChange}
      />
    </>
  );
}

export default Filter;
