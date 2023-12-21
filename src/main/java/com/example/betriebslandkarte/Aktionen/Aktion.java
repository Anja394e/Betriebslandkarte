package com.example.betriebslandkarte.Aktionen;

import com.example.betriebslandkarte.Person.Person;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Aktion")
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class Aktion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NonNull
    @Column(name = "name", nullable = false)
    private String name;

    @NonNull
    @Column(name = "Standort", nullable = false)
    private Date datum;

    @ManyToMany(mappedBy = "aktionen")
    private Set<Person> Personen;
}
