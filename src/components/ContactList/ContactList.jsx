import PropTypes from 'prop-types';
import { ContactItem } from "components/ContactItem/ContactItem";
import { List} from './ContactList.styled'
export const ContactList = ({states, deleteContact}) => {
    return(
        <List>
             {states.map(state => {
        return (
          <ContactItem
            name={state.name}
            key={state.id}
            number = {state.number}
            id={state.id}
            deleteContact = {deleteContact}
            
          />
        );
      })}
        </List>
    )
}
ContactList.propTypes = {
  // states: PropTypes.array({
  //   // contacts: PropTypes.shape({
  //   //   name: PropTypes.string.isRequared,
  //   //   id: PropTypes.string.isRequared,
  //   //   number: PropTypes.string.isRequared,
  //   // }),
  // }),
  deleteContact: PropTypes.func.isRequired,
};