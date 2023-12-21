package com.example.betriebslandkarte.Aktionen;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/map/Aktion")
public class AktionController {

    private final AktionService aktionService;

    @Autowired
    public AktionController(AktionService aktionService) {
        this.aktionService = aktionService;
    }

    @GetMapping(path = "/{aktionId}")
    public Optional<Aktion> getAktion(@PathVariable("aktionId") int aktionId) {
        return aktionService.getAktion(aktionId);
    }

    @GetMapping()
    public List<Aktion> getAllAktions() {
        return aktionService.getAllAktions();
    }

    @PostMapping
    public void registerNewAktion(@Valid @RequestBody Aktion aktion) {
        aktionService.addNewAktion(aktion);
    }

    @DeleteMapping(path = "/{aktionId}")
    public void deleteAktion(@PathVariable("aktionId") int aktionId) {
        aktionService.deleteAktion(aktionId);
    }

    @PutMapping(path = "/{aktionId}")
    public void updateAktion(
            @PathVariable("aktionId") int aktionId,
            @Valid @RequestBody Aktion newAktion) {
        aktionService.updateAktion(aktionId, newAktion);
    }

}
