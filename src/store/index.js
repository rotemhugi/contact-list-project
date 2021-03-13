import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import moment from 'moment';

Vue.use(Vuex);

function calcDaysUntilBD(contact){

    const birthdate = moment(contact.dob.date).format('YYYY-MM-DD');
    const today = moment().format('YYYY-MM-DD');
    const years = moment().diff(birthdate, 'years');
    const adjustToday = birthdate.substring(5) === today.substring(5) ? 0 : 1;
    const nextBirthday = moment(birthdate).add(years + adjustToday, 'years');
    return nextBirthday.diff(today, 'days');              
}

export default new Vuex.Store({
  state: {
    sortBy: '',
    contactList: [], 
  },

  mutations: {

    addContact(state,contact){
        state.contactList.push(contact);
        localStorage.setItem("contactList", JSON.stringify(state.contactList));
    },

    removeContact(state,contact){
        const contactIndex = state.contactList.findIndex((currContact)=>currContact === contact)

        if(contactIndex != -1){
            state.contactList.splice(contactIndex,1);
            localStorage.setItem("contactList", JSON.stringify(state.contactList));
        }
    },

    sortContactList(state){

        switch (state.sortBy) {
            case 'A-Z first name':
                state.contactList.sort((a,b)=> a.name.first.localeCompare(b.name.first))
                break;

            case 'Z-A first name':
                state.contactList.sort((a,b)=> b.name.first.localeCompare(a.name.first))
                break;

            case 'days until birthday':
                state.contactList.sort((a,b)=> a.daysUntilBirthday - b.daysUntilBirthday)
                break;
        
            default:
                break;
        }
    },

    setContactList(state,contactList){
        state.contactList = contactList;
    },

    setSortBy(state,sortBy){
        state.sortBy = sortBy;
    }
  },
  
  actions: {

    removeContact({ commit }, contact) {
      commit("removeContact", contact);
    },

    addNewContact(context){
        axios.get('https://randomuser.me/api')
        .then(response => {
            
            let contact = response.data.results[0];
            contact.daysUntilBirthday = calcDaysUntilBD(contact);

            context.commit('addContact', contact);
            context.commit('sortContactList')
            return contact;
          })
          .catch(e => {
              console.log(e)
          })
      },

    getContacts(context){
        var contactList = JSON.parse(localStorage.getItem("contactList"));

        if(contactList != undefined){
            context.commit('setContactList', contactList);
        }
    },

    setSortBy({ commit }, sortBy) {
        commit("setSortBy", sortBy)
        commit('sortContactList')
      },

  },

  getters: {

    contactList(state){
        return state.contactList;
    }
    
  }

});
