package com.obs.backend.controller;

import com.obs.backend.model.Project;
import com.obs.backend.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/projects")
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // CREATE PROJECT
    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    // GET PROJECTS BY USER
    @GetMapping("/{userId}")
    public List<Project> getProjects(@PathVariable Long userId) {
        return projectRepository.findByUserId(userId);
    }
}