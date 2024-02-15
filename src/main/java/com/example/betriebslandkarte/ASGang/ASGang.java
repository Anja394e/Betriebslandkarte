package com.example.betriebslandkarte.ASGang;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "ASGang")
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class ASGang {

    @Id
    @NonNull
    @Column(name = "aSGang", nullable = false)
    private String aSGang;

    @NonNull
    @Column(name = "ausbildung", nullable = false)
    private boolean ausbildung; //bei Ausbildung true; bei Studium false

    public ASGang(String name) {
        this.setASGang(name);
        char ersterBuchstabe = name.charAt(0);
        char zweiterBuchstabe = name.charAt(1);
        if (ersterBuchstabe == 'I' && zweiterBuchstabe == 'T') {
            this.setAusbildung(true);
        } else if (ersterBuchstabe == 'K' && zweiterBuchstabe == 'D') {
            this.setAusbildung(true);
        } else if (ersterBuchstabe == 'K' && zweiterBuchstabe == 'f') {
            this.setAusbildung(true);
        }
    }

}
