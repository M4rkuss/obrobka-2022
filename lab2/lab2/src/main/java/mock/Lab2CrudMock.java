package mock;

import footballers.Footballers;
import crud.Lab2CrudInterface;

public class Lab2CrudMock implements Lab2CrudInterface {

	@Override
	public Footballers readFootballers() {
		// TODO Auto-generated method stub
		return new Footballers("Mock1", 23, "qwerty");
	}

	@Override
	public void updateFootballers(Footballers footballers) {
		// TODO Auto-generated method stub

	}

}