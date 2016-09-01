package com.hui.demo.junitdemo;

import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TestName;

public class TestRule5 {
	@Rule
	public TestName name = new TestName();

	@Test
	public void testA() {
		assertEquals("testA", name.getMethodName());
	}

	@Test
	public void testB() {
		assertEquals("testB", name.getMethodName());
	}
}
