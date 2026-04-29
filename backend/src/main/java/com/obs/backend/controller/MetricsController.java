package com.obs.backend.controller;



import com.obs.backend.model.Metrics;
import com.obs.backend.repository.MetricsRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/metrics")
public class MetricsController {

    private final MetricsRepository metricsRepository;

    public MetricsController(MetricsRepository metricsRepository) {
        this.metricsRepository = metricsRepository;
    }

    // POST metrics
    @PostMapping
    public Metrics addMetrics(@RequestBody Metrics metrics) {
        metrics.setTimestamp(LocalDateTime.now());
        return metricsRepository.save(metrics);
    }

    // GET metrics by server
    @GetMapping("/{serverId}")
    public List<Metrics> getMetrics(@PathVariable String serverId) {
        return metricsRepository.findByServerId(serverId);
    }
}