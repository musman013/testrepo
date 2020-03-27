package com.nfinity.fastcode.domain.irepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;
import com.nfinity.fastcode.domain.model.TaskEntity;
@RepositoryRestResource(collectionResourceRel = "task", path = "task")
public interface ITaskRepository extends JpaRepository<TaskEntity, Long>,QuerydslPredicateExecutor<TaskEntity> {

}
