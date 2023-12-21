package com.example.betriebslandkarte.ASGang;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ASGangService {

    private final ASGangRepo aSGangRepo;


    public ASGangService(ASGangRepo aSGangRepo) {
        this.aSGangRepo = aSGangRepo;
    }

    public ASGang getASGang(String name) {
        for (ASGang gang : getAllASGangs()
        ) {
            String existierenderGang = gang.getASGang();
            if (existierenderGang == name) {
                return gang;
            }
        }
        throw new IllegalStateException("ASGang " + name + " does not exist.");
    }

    public List<ASGang> getAllASGangs() {
        return aSGangRepo.findAll();
    }

    public void addNewASGang(ASGang aSGang) {
        aSGangRepo.save(aSGang);
    }

    public void deleteASGang(String aSGang) {

        aSGangRepo.delete(getASGang(aSGang));

    }

    public void updateASGang(String aSGang, ASGang newASGang) {

        ASGang oldASGang = getASGang(aSGang);

        oldASGang.setAusbildung(newASGang.isAusbildung());
        oldASGang.setASGang(newASGang.getASGang());

        aSGangRepo.save(oldASGang);

    }

    public void patchASGang(String name, ASGang newASGang) {
        ASGang oldASGang = getASGang(name);


        if (!newASGang.getASGang().isEmpty()) {
            oldASGang.setASGang(newASGang.getASGang());
        }

        oldASGang.setAusbildung(newASGang.isAusbildung());

        aSGangRepo.save(oldASGang);

    }
}

