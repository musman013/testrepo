package com.nfinity.fastcode.domain.model.Temp;

import java.util.*;
import javax.persistence.*;

/**
 * Auto-generated by:
 * org.apache.openjpa.jdbc.meta.ReverseMappingTool$AnnotatedCodeGenerator
 */
@Entity
@Table(schema="s1", name="apps")
public class Apps {
	@Basic
	@Column(name="artifact_id", nullable=false, length=30)
	private String artifactId;

	@Basic
	@Column(name="auth_method", length=20)
	private String authMethod;

	@Basic
	@Column(name="auth_table")
	private String authTable;

	@Basic
	private boolean caching;

	@Basic
	@Column(name="created_date")
	private Date createdDate;

	@Basic
	@Column(length=500)
	private String description;

	@Basic
	@Column(name="destination_path", nullable=false, length=30)
	private String destinationPath;

	@Basic
	@Column(name="email_templates")
	private boolean emailTemplates;

	@Basic
	@Column(name="entity_history")
	private boolean entityHistory;

	@Basic
	@Column(name="group_id", nullable=false, length=30)
	private String groupId;

	@Id
	@Column(columnDefinition="bigserial")
	private long id;

	@Basic
	@Column(name="jdbc_password", nullable=false)
	private String jdbcPassword;

	@Basic
	@Column(name="jdbc_url", nullable=false)
	private String jdbcUrl;

	@Basic
	@Column(name="jdbc_username", nullable=false)
	private String jdbcUsername;

	@Basic
	private String name;

	@Basic
	@Column(name="process_admin_app")
	private boolean processAdminApp;

	@Basic
	@Column(name="process_management")
	private boolean processManagement;

	@Basic
	private boolean scheduler;

	@Basic
	@Column(length=20)
	private String schema;

	@OneToMany(targetEntity=com.nfinity.fastcode.domain.model.Temp.Task.class, mappedBy="apps", cascade=CascadeType.MERGE)
	private Set tasks = new HashSet();

	@Basic
	private boolean upgrade;

	@Basic
	@Column(name="user_id", columnDefinition="int8")
	private long userId;

	@Basic
	@Column(name="user_only")
	private boolean userOnly;


	public Apps() {
	}

	public Apps(long id) {
		this.id = id;
	}

	public String getArtifactId() {
		return artifactId;
	}

	public void setArtifactId(String artifactId) {
		this.artifactId = artifactId;
	}

	public String getAuthMethod() {
		return authMethod;
	}

	public void setAuthMethod(String authMethod) {
		this.authMethod = authMethod;
	}

	public String getAuthTable() {
		return authTable;
	}

	public void setAuthTable(String authTable) {
		this.authTable = authTable;
	}

	public boolean isCaching() {
		return caching;
	}

	public void setCaching(boolean caching) {
		this.caching = caching;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDestinationPath() {
		return destinationPath;
	}

	public void setDestinationPath(String destinationPath) {
		this.destinationPath = destinationPath;
	}

	public boolean isEmailTemplates() {
		return emailTemplates;
	}

	public void setEmailTemplates(boolean emailTemplates) {
		this.emailTemplates = emailTemplates;
	}

	public boolean isEntityHistory() {
		return entityHistory;
	}

	public void setEntityHistory(boolean entityHistory) {
		this.entityHistory = entityHistory;
	}

	public String getGroupId() {
		return groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getJdbcPassword() {
		return jdbcPassword;
	}

	public void setJdbcPassword(String jdbcPassword) {
		this.jdbcPassword = jdbcPassword;
	}

	public String getJdbcUrl() {
		return jdbcUrl;
	}

	public void setJdbcUrl(String jdbcUrl) {
		this.jdbcUrl = jdbcUrl;
	}

	public String getJdbcUsername() {
		return jdbcUsername;
	}

	public void setJdbcUsername(String jdbcUsername) {
		this.jdbcUsername = jdbcUsername;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isProcessAdminApp() {
		return processAdminApp;
	}

	public void setProcessAdminApp(boolean processAdminApp) {
		this.processAdminApp = processAdminApp;
	}

	public boolean isProcessManagement() {
		return processManagement;
	}

	public void setProcessManagement(boolean processManagement) {
		this.processManagement = processManagement;
	}

	public boolean isScheduler() {
		return scheduler;
	}

	public void setScheduler(boolean scheduler) {
		this.scheduler = scheduler;
	}

	public String getSchema() {
		return schema;
	}

	public void setSchema(String schema) {
		this.schema = schema;
	}

	public Set getTasks() {
		return tasks;
	}

	public void setTasks(Set tasks) {
		this.tasks = tasks;
	}

	public boolean isUpgrade() {
		return upgrade;
	}

	public void setUpgrade(boolean upgrade) {
		this.upgrade = upgrade;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public boolean isUserOnly() {
		return userOnly;
	}

	public void setUserOnly(boolean userOnly) {
		this.userOnly = userOnly;
	}
}