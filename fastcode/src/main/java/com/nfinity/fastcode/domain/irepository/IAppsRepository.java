package com.nfinity.fastcode.domain.irepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.nfinity.fastcode.domain.model.TaskEntity; 
import java.util.List;
import com.nfinity.fastcode.domain.model.AppsEntity;
@RepositoryRestResource(collectionResourceRel = "apps", path = "apps")
public interface IAppsRepository extends JpaRepository<AppsEntity, Long>,QuerydslPredicateExecutor<AppsEntity> {

}
