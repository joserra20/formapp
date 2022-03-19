package com.joserra.formapp.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FormController {
    ArrayList<FormData> datos = new ArrayList<FormData>();

    @GetMapping("/api/form")
    public @ResponseBody ResponseEntity<String> getForm() {

        return ResponseEntity.ok().body(datos.toString());
    }

    @PostMapping("/api/form")
    public @ResponseBody ResponseEntity<String> postForm(@RequestBody FormData datosPost) {
        datos.add(datosPost);

        return ResponseEntity.ok().body("Dato incluido");
    }
}
