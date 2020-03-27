package com.nfinity.fastcode.application.apps;

import org.mapstruct.Mapper;
import com.nfinity.fastcode.application.apps.dto.*;
import com.nfinity.fastcode.domain.model.AppsEntity;

@Mapper(componentModel = "spring")
public interface AppsMapper {

   AppsEntity createAppsInputToAppsEntity(CreateAppsInput appsDto);
   
   CreateAppsOutput appsEntityToCreateAppsOutput(AppsEntity entity);

   AppsEntity updateAppsInputToAppsEntity(UpdateAppsInput appsDto);

   UpdateAppsOutput appsEntityToUpdateAppsOutput(AppsEntity entity);

   FindAppsByIdOutput appsEntityToFindAppsByIdOutput(AppsEntity entity);


}
