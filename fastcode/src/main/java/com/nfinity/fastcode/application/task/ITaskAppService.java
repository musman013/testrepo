package com.nfinity.fastcode.application.task;

import java.util.List;
import javax.validation.constraints.Positive;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.nfinity.fastcode.commons.search.SearchCriteria;
import com.nfinity.fastcode.application.task.dto.*;

@Service
public interface ITaskAppService {

	CreateTaskOutput create(CreateTaskInput task);

    void delete(Long id);

    UpdateTaskOutput update(Long id, UpdateTaskInput input);

    FindTaskByIdOutput findById(Long id);

    List<FindTaskByIdOutput> find(SearchCriteria search, Pageable pageable) throws Exception;

    
    //Apps
    GetAppsOutput getApps(Long taskid);
}
