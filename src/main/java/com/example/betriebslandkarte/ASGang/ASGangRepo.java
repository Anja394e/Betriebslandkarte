package com.example.betriebslandkarte.ASGang;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ASGangRepo extends JpaRepository<ASGang, String> {

}
