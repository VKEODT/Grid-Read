package com.obs.backend.repository;

import com.obs.backend.model.Metrics;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MetricsRepository extends JpaRepository<Metrics, Long> {

    List<Metrics> findByServerId(String serverId);
}