package com.hui.advalidationdemo;

import static com.hui.advalidationdemo.constant.ApplicationConstants.getConfig;
import static java.lang.String.format;
import static org.acegisecurity.ldap.LdapUtils.closeContext;
import static org.apache.commons.lang3.StringUtils.isBlank;
import static org.apache.log4j.Logger.getLogger;

import javax.naming.directory.DirContext;

import org.apache.log4j.Logger;
import org.springframework.ldap.core.LdapTemplate;


public class ADAuthSpring {
	private static final Logger log = getLogger(ADAuthSpring.class);
	private LdapTemplate ldapTemplate;

	public void setLdapTemplate(LdapTemplate ldapTemplate) {
		this.ldapTemplate = ldapTemplate;
	}

	public boolean authenticate(String userName, String password) {
		DirContext ctx = null;
		String distinguishedName = null;
		distinguishedName = buildADPath(userName);
		System.out.println("userName:" + userName + " map distinguishedName:" + distinguishedName);
		try {
			distinguishedName = buildADPath(userName);
			System.out.println("userName:" + userName + " map distinguishedName:" + distinguishedName);

			ctx = ldapTemplate.getContextSource().getContext(distinguishedName, password);
			System.out.println("authenticate success distinguishedName:" + distinguishedName + " userName:" + userName);
			return true;
		} catch (Exception e) {
			System.out.println("authenticate fail distinguishedName:" + distinguishedName + " userName:" + userName);
			return false;
		} finally {
			closeContext(ctx);
		}
	}

	private String buildADPath(String userName) {
		String adPathTemplate = getConfig("ad.path.template");
		if (isBlank(adPathTemplate)) {
			log.error("ad.path template do not exist in config.properties please config it");
			return null;
		}
		log.debug("ad.path template is "+adPathTemplate);
		try {
			String adPath = format(adPathTemplate, userName);
			log.debug("adPath is:"+adPath);
			return adPath;
		} catch (Exception e) {
			log.error("ad path template format error");
			return null;
		}
		
	}
}