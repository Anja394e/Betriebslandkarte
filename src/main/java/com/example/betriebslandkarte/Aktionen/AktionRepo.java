package com.example.betriebslandkarte.Aktionen;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AktionRepo extends JpaRepository<Aktion, Integer> {

}
