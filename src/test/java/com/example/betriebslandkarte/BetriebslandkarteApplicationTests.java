package com.example.betriebslandkarte;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BetriebslandkarteApplicationTests {

    @Test
    void contextLoads() {
    }
    /**
     @Test void userGeneration() {

     PersonRepo personRepo = new PersonRepo() {
     @Override public void flush() {

     }

     @Override public <S extends Person> S saveAndFlush(S entity) {
     return null;
     }

     @Override public <S extends Person> List<S> saveAllAndFlush(Iterable<S> entities) {
     return null;
     }

     @Override public void deleteAllInBatch(Iterable<Person> entities) {

     }

     @Override public void deleteAllByIdInBatch(Iterable<Integer> integers) {

     }

     @Override public void deleteAllInBatch() {

     }

     @Override public Person getOne(Integer integer) {
     return null;
     }

     @Override public Person getById(Integer integer) {
     return null;
     }

     @Override public Person getReferenceById(Integer integer) {
     return null;
     }

     @Override public <S extends Person> List<S> findAll(Example<S> example) {
     return null;
     }

     @Override public <S extends Person> List<S> findAll(Example<S> example, Sort sort) {
     return null;
     }

     @Override public <S extends Person> List<S> saveAll(Iterable<S> entities) {
     return null;
     }

     @Override public List<Person> findAll() {
     return null;
     }

     @Override public List<Person> findAllById(Iterable<Integer> integers) {
     return null;
     }

     @Override public <S extends Person> S save(S entity) {
     return null;
     }

     @Override public Optional<Person> findById(Integer integer) {
     return Optional.empty();
     }

     @Override public boolean existsById(Integer integer) {
     return false;
     }

     @Override public long count() {
     return 0;
     }

     @Override public void deleteById(Integer integer) {

     }

     @Override public void delete(Person entity) {

     }

     @Override public void deleteAllById(Iterable<? extends Integer> integers) {

     }

     @Override public void deleteAll(Iterable<? extends Person> entities) {

     }

     @Override public void deleteAll() {

     }

     @Override public List<Person> findAll(Sort sort) {
     return null;
     }

     @Override public Page<Person> findAll(Pageable pageable) {
     return null;
     }

     @Override public <S extends Person> Optional<S> findOne(Example<S> example) {
     return Optional.empty();
     }

     @Override public <S extends Person> Page<S> findAll(Example<S> example, Pageable pageable) {
     return null;
     }

     @Override public <S extends Person> long count(Example<S> example) {
     return 0;
     }

     @Override public <S extends Person> boolean exists(Example<S> example) {
     return false;
     }

     @Override public <S extends Person, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
     return null;
     }
     };
     PersonService personService = new PersonService(personRepo);

     Person person = new Person();
     person.setId(100);
     person.setBetrieb("DT IT");
     person.setStandort("Darmstadt");
     personService.addNewPerson(person);

     Person myperson = null;

     List<Person> personList = personService.getAllPersons();
     for (Person personx : personList){
     if (personx.getId()==person.getId()){
     myperson = personx;
     }
     }

     assertEquals(myperson.getId(), 100);
     assertEquals(myperson.getBetrieb(), "DT IT");
     assertEquals(myperson.getStandort(), "Darmstadt");
     }
     **/

}


