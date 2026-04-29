package com.obs.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Metrics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String serverId;

    private double cpu;

    private double memory;

    private LocalDateTime timestamp;

    public Metrics() {}

    public Long getId() { return id; }

    public String getServerId() { return serverId; }
    public void setServerId(String serverId) { this.serverId = serverId; }

    public double getCpu() { return cpu; }
    public void setCpu(double cpu) { this.cpu = cpu; }

    public double getMemory() { return memory; }
    public void setMemory(double memory) { this.memory = memory; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}