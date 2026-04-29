package com.obs.backend.controller; // Change this to match your folder!

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/test")
    @CrossOrigin(origins = "*")
    public String testConnection() {
        return "Backend is running and PostgreSQL is connected!";
    }
}
