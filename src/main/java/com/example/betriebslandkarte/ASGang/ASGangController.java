package com.example.betriebslandkarte.ASGang;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/map/ASGang")
public class ASGangController {

    private final ASGangService aSGangService;

    @Autowired
    public ASGangController(ASGangService aSGangService) {
        this.aSGangService = aSGangService;
    }

    @GetMapping(path = "/{aSGang}")
    public ASGang getASGang(@PathVariable("aSGang") String aSGang) {
        return aSGangService.getASGang(aSGang);
    }

    @GetMapping()
    public List<ASGang> getAllASGangs() {
        return aSGangService.getAllASGangs();
    }

    @PostMapping
    public void registerNewASGang(@Valid @RequestBody ASGang aSGang) {

        if (!getAllASGangs().contains(aSGang)) {
            aSGangService.addNewASGang(aSGang);
        }

    }

    @DeleteMapping(path = "/{aSGang}")
    public void deleteASGang(@PathVariable("aSGang") String aSGang) {
        aSGangService.deleteASGang(aSGang);
    }

    @PutMapping(path = "/{aSGang}")
    public void updateASGang(
            @PathVariable("aSGang") String aSGang,
            @Valid @RequestBody ASGang newASGang) {
        aSGangService.updateASGang(aSGang, newASGang);
    }

    @PatchMapping(path = "/{aSGang}")
    public void patchASGang(
            @PathVariable("aSGang") String aSGang,
            @RequestBody ASGang newASGang) {
        aSGangService.patchASGang(aSGang, newASGang);
    }
}