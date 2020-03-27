package com.nfinity.fastcode.domain.task;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import javax.validation.constraints.Positive;
import com.nfinity.fastcode.domain.model.TaskEntity;
import com.nfinity.fastcode.domain.model.AppsEntity;

public interface ITaskManager {
    // CRUD Operations
    TaskEntity create(TaskEntity task);

    void delete(TaskEntity task);

    TaskEntity update(TaskEntity task);

    TaskEntity findById(Long id);
	
    Page<TaskEntity> findAll(Predicate predicate, Pageable pageable);
   
    //Apps
    public AppsEntity getApps(Long taskId);
}
