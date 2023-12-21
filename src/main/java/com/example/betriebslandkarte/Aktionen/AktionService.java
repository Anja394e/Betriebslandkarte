package com.example.betriebslandkarte.Aktionen;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AktionService {
    private final AktionRepo aktionRepo;


    public AktionService(AktionRepo aktionRepo) {
        this.aktionRepo = aktionRepo;
    }

    public Optional<Aktion> getAktion(int aktionId) {
        return aktionRepo.findById(aktionId);
    }

    public List<Aktion> getAllAktions() {
        return aktionRepo.findAll();
    }

    public void addNewAktion(Aktion aktion) {
        aktionRepo.save(aktion);
    }

    public void deleteAktion(int aktionId) {
        boolean exists = aktionRepo.existsById(aktionId);
        if (!exists) {
            throw new IllegalStateException("Aktion with id " + aktionId + " does not exist.");
        }
        aktionRepo.deleteById(aktionId);
    }

    public void updateAktion(int aktionid, Aktion newAktion) {
        Aktion oldAktion = aktionRepo.findById(aktionid).orElseThrow(() -> new IllegalStateException(
                        "aktion with id " + aktionid + " does not exist."
                )
        );

        oldAktion.setId(newAktion.getId());
        oldAktion.setName(newAktion.getName());
        oldAktion.setDatum(newAktion.getDatum());

        aktionRepo.save(oldAktion);

    }
}
