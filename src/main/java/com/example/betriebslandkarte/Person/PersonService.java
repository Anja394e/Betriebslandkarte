package com.example.betriebslandkarte.Person;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepo personRepo;

    public PersonService(PersonRepo personRepo) {
        this.personRepo = personRepo;
    }

    public Optional<Person> getPerson(int personId) {
        return personRepo.findById(personId);
    }

    public List<Person> getAllPersons() {
        return personRepo.findAll();
    }

    public void addNewPerson(Person person) {

        person.setErstellDatum(new Date());

        if (!person.isMitglied()) {
            person.setMitglidSeit(0);
        }

        personRepo.save(person);
    }

    public void deletePerson(int personId) {
        boolean exists = personRepo.existsById(personId);
        if (!exists) {
            throw new IllegalStateException("Person with id " + personId + " does not exist.");
        }
        personRepo.deleteById(personId);
    }

    //TODO alle Kategorien für update und patch
    public void updatePerson(int personid, Person newPerson) {
        Person oldPerson = personRepo.findById(personid).orElseThrow(() -> new IllegalStateException(
                        "person with id " + personid + " does not exist."
                )
        );

        oldPerson.setId(newPerson.getId());
        oldPerson.setBetrieb(newPerson.getBetrieb());
        oldPerson.setStandort(newPerson.getStandort());

        if (!newPerson.isMitglied()) {
            oldPerson.setMitglidSeit(0);
        } else {
            oldPerson.setMitglidSeit(newPerson.getMitglidSeit());
        }

        personRepo.save(oldPerson);

    }

    public void patchPerson(int personid, Person newPerson) {
        Person oldPerson = personRepo.findById(personid).orElseThrow(() -> new IllegalStateException(
                        "Person with ID " + personid + " does not exist."
                )
        );

        if (newPerson.getId() > 0) {
            oldPerson.setId(newPerson.getId());
        }

        if (newPerson.getBetrieb() != null && !newPerson.getBetrieb().isEmpty()) {
            oldPerson.setBetrieb(newPerson.getBetrieb());
        }

        if (newPerson.getStandort() != null && !newPerson.getStandort().isEmpty()) {
            oldPerson.setStandort(newPerson.getStandort());
        }

        personRepo.save(oldPerson);

    }
}
