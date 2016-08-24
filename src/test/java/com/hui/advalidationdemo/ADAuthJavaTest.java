package com.hui.advalidationdemo;

import static com.hui.advalidationdemo.ADAuthJava.authenticate;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
public class ADAuthJavaTest {
	@Test
	public void testAuthenticate() {
		assertTrue(authenticate("x.x.x.x", "xxx", "abc@adservice.com", "abc123."));
	}
}
