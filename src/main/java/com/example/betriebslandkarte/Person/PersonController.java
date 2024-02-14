package com.example.betriebslandkarte.Person;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin// Specify the allowed origin: allow all origins
@RestController
@RequestMapping(path = "api/v1/map")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping(path = "/{personId}")
    public Optional<Person> getPerson(@PathVariable("personId") int personId) {
        return personService.getPerson(personId);
    }

    @GetMapping()
    public List<Person> getAllPersons() {
        return personService.getAllPersons();
    }

    @PostMapping
    public void registerNewPerson(@Valid @RequestBody Person person) {
        personService.addNewPerson(person);
    }

    @DeleteMapping(path = "/{personId}")
    public void deletePerson(@PathVariable("personId") int personId) {
        personService.deletePerson(personId);
    }

    @PutMapping(path = "/{personId}")
    public void updatePerson(
            @PathVariable("personId") int personId,
            @Valid @RequestBody Person newPerson) {
        personService.updatePerson(personId, newPerson);
    }

    @PatchMapping(path = "/{personId}")
    public void patchPerson(
            @PathVariable("personId") int personId,
            @RequestBody Person newPerson) {
        personService.patchPerson(personId, newPerson);
    }
}
