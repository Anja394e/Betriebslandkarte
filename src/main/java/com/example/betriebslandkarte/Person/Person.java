package com.example.betriebslandkarte.Person;

import com.example.betriebslandkarte.ASGang.ASGang;
import com.example.betriebslandkarte.Aktionen.Aktion;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Person")
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NonNull
    @Column(name = "betrieb")
    private String betrieb;

    @NonNull
    @Column(name = "standort", nullable = false)
    private String standort;

    @NonNull
    @Column(name = "erstellDatum")
    private Date erstellDatum;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "person_ASGang")
    private ASGang aSGang;

    @NonNull
    @Column(name = "jahrgang", nullable = false)
    private int jahrgang;

    @NonNull
    @Column(name = "mitglied", nullable = false)
    private boolean mitglied;

    @NonNull
    @Column(name = "mitgliedSeit", nullable = false)
    private int mitgliedSeit;

    @NonNull
    @Column(name = "vL", nullable = false)
    private boolean vl;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "Person_Aktion",
            joinColumns = @JoinColumn(name = "Person_ID"),
            inverseJoinColumns = @JoinColumn(name = "Aktion_ID"))
    private Set<Aktion> aktionen;


}

