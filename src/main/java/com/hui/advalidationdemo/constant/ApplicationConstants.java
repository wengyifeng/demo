package com.hui.advalidationdemo.constant;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.log4j.Logger;
import static java.lang.Thread.*;


public class ApplicationConstants {
	
	private static final String CONFIG_FILE = "config.properties";
	private static Map<String, Object> configs = new HashMap<String, Object>();
	
	
	private static final Logger log = Logger.getLogger(ApplicationConstants.class);
	static {
		InputStream in = null;
		Properties p = new Properties();
		try{
			in = currentThread().getContextClassLoader().getResourceAsStream(CONFIG_FILE);		
			p.load(in);
			for(Object k : p.keySet()){
				String key = (String) k;
				configs.put( key, p.getProperty(key));
			}
			log.info("config.properties is loaded!"  );
		} catch (IOException e){
			log.error("Unable to read config.properties");				
		} finally{
			if(in != null)
				try {
					in.close();
				} catch (IOException e) {
					log.error("Unable to close inputstream");		
				}
		}
	}
	
	public static String getConfig(String key){
		return (String) configs.get(key);
	}
	
	
}

